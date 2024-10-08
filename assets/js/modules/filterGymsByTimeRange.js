// filters the array of gyms to show only gyms with opening hours corresponding to what the user wants to view

const filterGymsByTimeRange = (gyms, startTime, endTime) => {
    return gyms.filter(gym =>
        gym.schedules.some(item => item.hour >= startTime && item.hour <= endTime)
    ).map(gym => {

        // "cleans" the array of times that is in the object with the gym information to only show the corresponding times
        
        const filteredSchedules = gym.schedules.map(schedule => {
            if ((schedule.weekdays === 'Sáb.' || schedule.weekdays === 'Dom.') && (schedule.hour >= startTime && schedule.hour <= endTime)) return schedule;

            if (schedule.hour == 'Fechada') return schedule;

            if (schedule.weekdays === 'Seg. à Sex.' && schedule.hour >= startTime && schedule.hour <= endTime) return schedule;
            
            return null;
        }).filter(schedule => schedule !== null);

        return {
            ...gym,
            schedules: filteredSchedules
        };
    });
}

export default filterGymsByTimeRange;