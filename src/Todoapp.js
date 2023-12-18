import React, { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Container,
  Typography,
  Paper,
} from '@mui/material';
import { green, blueGrey } from '@mui/material/colors';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleAddTask = () => {
    if (!newTask.trim()) return; // Prevent adding empty tasks
    const updatedTasks = [...tasks, { id: Date.now(), text: newTask }];
    setTasks(updatedTasks);
    setNewTask('');
  };

  const handleEditTask = (task) => {
    setEditingId(task.id);
    setEditingText(task.text);
  };

  const handleSaveTask = (id) => {
    const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, text: editingText } : task));
    setTasks(updatedTasks);
    setEditingId(null);
    setEditingText('');
  };

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleEditChange = (e) => {
    setEditingText(e.target.value);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" sx={{ color: blueGrey[900], marginBottom: 2 }}>
        Task List
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, backgroundColor: green[50], marginBottom: 3 }}>
        <Box>
          <TextField
            label="New Task"
            value={newTask}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" onClick={handleAddTask} sx={{ backgroundColor: green[600], '&:hover': { backgroundColor: green[800] } }}>
            Add Task
          </Button>
        </Box>
      </Paper>
      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item xs={12} key={task.id}>
            <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
              <CardContent>
                {editingId === task.id ? (
                  <TextField
                    value={editingText}
                    onChange={handleEditChange}
                    fullWidth
                  />
                ) : (
                  <Typography variant="body1">{task.text}</Typography>
                )}
              </CardContent>
              <CardActions>
                {editingId === task.id ? (
                  <Button onClick={() => handleSaveTask(task.id)} sx={{ color: green[800] }}>
                    Save
                  </Button>
                ) : (
                  <Button onClick={() => handleEditTask(task)} sx={{ color: blueGrey[800] }}>
                    Edit
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TodoApp;
