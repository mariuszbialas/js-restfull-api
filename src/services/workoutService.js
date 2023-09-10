const Workout = require('../database/Workout');
const { v4: uuid } = require('uuid');

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  return allWorkouts;
};

const getOneWorkout = (workoutId) => {
  const workout = Workout.getOneWorkout(workoutId);
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date.toLocaleString('de-DE'),
    updatedAt: new Date.toLocaleString('de-DE'),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = (workoutId, changes) => {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
  return updatedWorkout;
};

const deleteOneWorkout = (workoutId) => {
    Workout.deleteOneWorkout(workoutId);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
