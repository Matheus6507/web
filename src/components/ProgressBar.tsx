interface ProgressBarProps {
    progress: number
}

export function ProgressBar(props: ProgressBarProps) {
    const progressStyles = {
        width: `${props.progress}%`
    }

    return (
        <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
            <div 
            className='h-3 rounded-xl bg-violet-600'
            style={progressStyles} 
            aria-label="Progresso de hábitos completados no dia" 
            aria-valuenow={props.progress} />
        </div>
    )
}