const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Task = require('../models/Task');
const { protect } = require('../middleware/auth');

// @route   GET /api/tasks
// @desc    Get all tasks for logged in user
// @access  Private
router.get('/', protect, async (req, res) => {
    try {
        const { status, priority, search } = req.query;

        // Build query
        let query = { user: req.user._id };

        if (status) {
            query.status = status;
        }

        if (priority) {
            query.priority = priority;
        }

        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
            ];
        }

        const tasks = await Task.find(query).sort({ createdAt: -1 });

        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   GET /api/tasks/:id
// @desc    Get single task
// @access  Private
router.get('/:id', protect, async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Make sure user owns task
        if (task.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// @route   POST /api/tasks
// @desc    Create a new task
// @access  Private
router.post(
    '/',
    protect,
    [
        body('title').trim().notEmpty().withMessage('Title is required'),
        body('status')
            .optional()
            .isIn(['pending', 'in-progress', 'completed'])
            .withMessage('Invalid status'),
        body('priority')
            .optional()
            .isIn(['low', 'medium', 'high'])
            .withMessage('Invalid priority'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const task = await Task.create({
                user: req.user._id,
                title: req.body.title,
                description: req.body.description,
                status: req.body.status,
                priority: req.body.priority,
                dueDate: req.body.dueDate,
            });

            res.status(201).json(task);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
);

// @route   PUT /api/tasks/:id
// @desc    Update a task
// @access  Private
router.put(
    '/:id',
    protect,
    [
        body('title').optional().trim().notEmpty().withMessage('Title cannot be empty'),
        body('status')
            .optional()
            .isIn(['pending', 'in-progress', 'completed'])
            .withMessage('Invalid status'),
        body('priority')
            .optional()
            .isIn(['low', 'medium', 'high'])
            .withMessage('Invalid priority'),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const task = await Task.findById(req.params.id);

            if (!task) {
                return res.status(404).json({ message: 'Task not found' });
            }

            // Make sure user owns task
            if (task.user.toString() !== req.user._id.toString()) {
                return res.status(401).json({ message: 'Not authorized' });
            }

            task.title = req.body.title || task.title;
            task.description = req.body.description !== undefined ? req.body.description : task.description;
            task.status = req.body.status || task.status;
            task.priority = req.body.priority || task.priority;
            task.dueDate = req.body.dueDate !== undefined ? req.body.dueDate : task.dueDate;

            const updatedTask = await task.save();

            res.json(updatedTask);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
);

// @route   DELETE /api/tasks/:id
// @desc    Delete a task
// @access  Private
router.delete('/:id', protect, async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        // Make sure user owns task
        if (task.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: 'Not authorized' });
        }

        await task.deleteOne();

        res.json({ message: 'Task removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
