export const generateGrid  = (rows:number, columns:number):number[][] => {
    return [...new Array(rows)].map(n => new Array(columns).fill(0))
}