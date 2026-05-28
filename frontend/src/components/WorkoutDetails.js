import { useWorkoutsContext } from '../hooks/UseWorkoutsContext'
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
    const {dispatch} = useWorkoutsContext()
    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json() /// document the json response from the backend,
        //  it should be the deleted workout object

        if(response.ok){
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg):</strong> {workout.load}</p>
            <p><strong>Reps:</strong> {workout.reps}</p>
                <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
                <span onClick ={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails