export const formatTemperature = (temperature:number): number => {
    return Math.round(temperature - 273.15)
}