import React, { useState } from 'react';
import {
  Avatar,
  Badge,
  Box,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography
} from '@mui/material';
import {
  Mail as MailIcon,
  Face as FaceIcon,
  Delete as DeleteIcon,
  AccountCircle,
  Notifications
} from '@mui/icons-material';

const DataDisplayExample = () => {
  const [chipData, setChipData] = useState([
    { key: 0, label: 'React' },
    { key: 1, label: 'Material UI' },
    { key: 2, label: 'JavaScript' },
  ]);

  const handleDelete = (chipToDelete) => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  // Sample data for table
  const createData = (name, calories, fat, carbs, protein) => {
    return { name, calories, fat, carbs, protein };
  };

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        MUI Data Display Components
      </Typography>

      {/* Typography Section */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>Typography Examples</Typography>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="body1">
          Body 1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Body 2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Paper>

      {/* Avatar and Badge Section */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>Avatars and Badges</Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Avatar>H</Avatar>
          <Avatar sx={{ bgcolor: 'primary.main' }}>
            <FaceIcon />
          </Avatar>
          <Avatar src="https://mui.com/static/images/avatar/1.jpg" alt="User"/>
          <Badge badgeContent={4} color="primary">
            <MailIcon />
          </Badge>
          <Badge badgeContent={99} color="secondary" max={999}>
            <Notifications />
          </Badge>
        </Stack>
      </Paper>

      {/* Chips Section */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>Chips</Typography>
        <Stack direction="row" spacing={1}>
          {chipData.map((data) => (
            <Chip
              key={data.key}
              label={data.label}
              onDelete={() => handleDelete(data)}
              deleteIcon={<DeleteIcon />}
              variant="outlined"
            />
          ))}
          <Chip icon={<FaceIcon />} label="With Icon" color="primary" />
          <Chip label="Clickable" onClick={() => alert('Clicked!')} />
        </Stack>
      </Paper>

      {/* List Section */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>List</Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="John Doe"
              secondary="Software Engineer"
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Jane Smith"
              secondary="Product Manager"
            />
          </ListItem>
        </List>
      </Paper>

      {/* Table Section */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>Table</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    <Tooltip title="Click for details" arrow>
                      <span>{row.name}</span>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                  <TableCell align="right">{row.carbs}</TableCell>
                  <TableCell align="right">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default DataDisplayExample;