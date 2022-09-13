import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";

const initialState = {
  loading: false,
  categories: [],
  meals: [],
  meal: [],
};

export const getDishesCategories = createAsyncThunk(
  "dishes/getCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data.categories;
    } catch (error) {
      console.warn(error.message);
    }
  }
);

export const getMeals = createAsyncThunk(
  "dishes/getMeals",
  async (meals, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${
          meals || "Chicken"
        }`
      );
      return response.data.meals;
    } catch (error) {
      console.warn(error.message);
    }
  }
);

export const getMeal = createAsyncThunk(
  "dishes/getMeal",
  async (meal, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
      );
      return response.data.meals;
    } catch (error) {
      console.warn(error.message);
    }
  }
);

export const dishesSlice = createSlice({
  name: "dishes",
  initialState,
  extraReducers: {
    [getDishesCategories.pending]: (state, action) => {
      state.loading = true;
    },
    [getDishesCategories.fulfilled]: (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    },
    [getDishesCategories.rejected]: (state, action) => {
      console.log(state);
    },
    [getMeals.pending]: (state, action) => {
      state.loading = true;
    },
    [getMeals.fulfilled]: (state, action) => {
      state.loading = false;
      state.meals = action.payload;
    },
    [getMeals.rejected]: (state, action) => {
      console.log(state);
    },
    [getMeal.pending]: (state, action) => {
      state.loading = true;
    },
    [getMeal.fulfilled]: (state, action) => {
      state.loading = false;
      state.meal = action.payload;
    },
    [getMeal.rejected]: (state, action) => {
      console.log(state);
    },
  },
});

export default dishesSlice.reducer;
