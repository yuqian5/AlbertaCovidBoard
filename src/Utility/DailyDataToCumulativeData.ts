export default function DailyDataToCumulativeData (zone: any) : LineData {
    let currentCount = 0;
    let ret = {id : zone.id, color: "hsl(195, 70%, 50%)", data: [] as any[]}

    zone.data.forEach((day: any) => {
        currentCount += parseInt(day.y);
        ret.data.push({x: day.x, y: currentCount});
    });

    return ret;
}

class LineData {
    id : string;
    color = "hsl(195, 70%, 50%)";
    data = [] as any[];

    constructor(id: string) {
        this.id = id;
    }
}