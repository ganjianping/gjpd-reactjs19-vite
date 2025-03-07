import { useState } from 'react';
import {
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Switch,
  Slider,
  Select,
  MenuItem,
  InputLabel,
  Box,
  Stack,
  Typography,
  Autocomplete,
  Button,
  ButtonGroup,
  Fab,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TransferList } from './TransferList';

const CATEGORIES = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Beauty'];
const FEATURES = ['Durability', 'Design', 'Performance', 'Value for Money', 'User-friendly'];

const InputExample = () => {
  const [formState, setFormState] = useState({
    productName: '',
    category: null,
    features: [],
    satisfaction: true,
    purchaseExperience: 'excellent',
    rating: 3,
    priceRange: 50,
    recommendToOthers: false,
    selectedSize: '',
    reviewTitle: '',
    reviewText: '',
    notification: 'email',
    selectedFeatures: [], // For TransferList
  });

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setFormState((prev) => ({
      ...prev,
      [name]: checked !== undefined ? checked : value,
    }));
  };

  const handleAutocompleteChange = (event, newValue) => {
    setFormState((prev) => ({
      ...prev,
      category: newValue,
    }));
  };

  const handleToggleChange = (event, newValue) => {
    if (newValue !== null) {
      setFormState((prev) => ({
        ...prev,
        notification: newValue,
      }));
    }
  };

  const handleFeatureTransfer = (newFeatures) => {
    setFormState((prev) => ({
      ...prev,
      selectedFeatures: newFeatures,
    }));
  };

  return (
    <Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Product Review Form
      </Typography>

      <Stack spacing={3}>
        {/* Autocomplete for Product Category */}
        <Autocomplete
          options={CATEGORIES}
          value={formState.category}
          onChange={handleAutocompleteChange}
          renderInput={(params) => (
            <TextField {...params} label="Product Category" variant="outlined" />
          )}
        />

        {/* Text Fields */}
        <TextField
          label="Product Name"
          variant="outlined"
          name="productName"
          value={formState.productName}
          onChange={handleChange}
          fullWidth
        />

        {/* Rating */}
        <Box>
          <Typography component="legend">Overall Rating</Typography>
          <Rating
            name="rating"
            value={formState.rating}
            onChange={(event, newValue) => {
              setFormState((prev) => ({ ...prev, rating: newValue }));
            }}
          />
        </Box>

        {/* Button Group for Size Selection */}
        <FormControl>
          <FormLabel>Select Size</FormLabel>
          <ButtonGroup variant="contained" aria-label="size selection">
            {['S', 'M', 'L', 'XL'].map((size) => (
              <Button
                key={size}
                onClick={() => setFormState((prev) => ({ ...prev, selectedSize: size }))}
                color={formState.selectedSize === size ? 'primary' : 'inherit'}
              >
                {size}
              </Button>
            ))}
          </ButtonGroup>
        </FormControl>

        {/* Radio Group */}
        <FormControl>
          <FormLabel>Purchase Experience</FormLabel>
          <RadioGroup
            name="purchaseExperience"
            value={formState.purchaseExperience}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="excellent"
              control={<Radio />}
              label="Excellent"
            />
            <FormControlLabel
              value="good"
              control={<Radio />}
              label="Good"
            />
            <FormControlLabel
              value="fair"
              control={<Radio />}
              label="Fair"
            />
            <FormControlLabel
              value="poor"
              control={<Radio />}
              label="Poor"
            />
          </RadioGroup>
        </FormControl>

        {/* Slider for Price Range */}
        <Box>
          <Typography gutterBottom>Price Range ($)</Typography>
          <Slider
            value={formState.priceRange}
            onChange={(_, value) =>
              setFormState((prev) => ({ ...prev, priceRange: value }))
            }
            valueLabelDisplay="auto"
            min={0}
            max={1000}
            name="priceRange"
          />
        </Box>

        {/* Toggle Button Group for Notification Preference */}
        <Box>
          <Typography gutterBottom>Notification Preference</Typography>
          <ToggleButtonGroup
            value={formState.notification}
            exclusive
            onChange={handleToggleChange}
          >
            <ToggleButton value="email">Email</ToggleButton>
            <ToggleButton value="sms">SMS</ToggleButton>
            <ToggleButton value="none">None</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {/* Transfer List for Features */}
        <Box>
          <Typography gutterBottom>Select Product Features to Review</Typography>
          <TransferList
            items={FEATURES}
            selected={formState.selectedFeatures}
            onChange={handleFeatureTransfer}
          />
        </Box>

        {/* Checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              checked={formState.satisfaction}
              onChange={handleChange}
              name="satisfaction"
            />
          }
          label="Are you satisfied with the product?"
        />

        {/* Switch */}
        <FormControlLabel
          control={
            <Switch
              checked={formState.recommendToOthers}
              onChange={handleChange}
              name="recommendToOthers"
            />
          }
          label="Would you recommend this product to others?"
        />

        {/* Floating Action Button */}
        <Box sx={{ position: 'fixed', bottom: 16, right: 16 }}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Box>

        {/* Display form state */}
        <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Form State:
          </Typography>
          <pre>{JSON.stringify(formState, null, 2)}</pre>
        </Paper>
      </Stack>
    </Box>
  );
};

export default InputExample;