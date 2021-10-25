import "./pastproject.css"

export default function PastProjects() {
    return (
        <>
        <div className="pastProject">
            <div className="pastProjectTitle">“Y-slicing” Model for Biased Data in ML</div>
            <div className="pastProjectAbstact">
                Significantly biased datasets have always been a problem for 
                real-world applications of ML algorithms.
                Previous approaches focus on generating underrepresented data 
                or discarding overrepresented data.  
                Based on the Quasi-Monte Carlo method, 
                I developed new techniques for CNN to 
                process significantly-biased samples efficiently by 
                maximizing the contribution of each bach.
            </div>
        </div>
        
        </>
    )
}
