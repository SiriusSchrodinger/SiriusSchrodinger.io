import "./pastproject.css"

export default function PastProjects() {
    return (
        <>
        <div className="pastProject">
            <div className="pastProjectTitle">Variational Auto-encoder from Manifold Valued Data</div>
            <div className="pastProjectAbstact">
                I developed an encoding and decoding neural network consisting of 
                2D convolution encoding layers and Cayley Map based decoding layers to 
                minimize the reconstruction loss between input and output manifold data.
            </div>
        </div>
        
        </>
    )
}
