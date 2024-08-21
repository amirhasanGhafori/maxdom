
const ChartBar = props=>{
    let barFillHeight = '0%';
    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <>
        <div className="chart-bar flex flex-col items-center">
            <div className="flex items-end chart-bar__inner w-4 bg-gray-400 h-44 rounded-lg">
                <div className="chart-bar__fill w-4 bg-red-400 rounded-lg" style={{height:barFillHeight,backgroundColor:'red'}}>
                    
                </div>
            </div>
            <div className="chart-bar__label text-sm text-white">{props.label}</div>
        </div>
        </>
    );
}

export default ChartBar;