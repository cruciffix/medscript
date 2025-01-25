export default function CrossSVG({width, height, className, ref}) {
    return (
        <svg ref={ref}
        className={className} width={`${width}`} height={height} viewBox="0 0 111 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.0981445" y="89.0161" width="133.947" height="14.6793" rx="7.33963" transform="rotate(-41.56 0.0981445 89.0161)" fill="#3BBC2D"/>
        <rect x="9.73828" width="133.947" height="14.6793" rx="7.33963" transform="rotate(41.56 9.73828 0)" fill="#3BBC2D"/>
        </svg>
    )
}