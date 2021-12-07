import './publication.css';

export default function Publication() {
    return (
        <>
        <div className="publication">
            <div className="publicationTitle">
                Prototypical Model with Novel Information-theoretic Loss Function for Generalized Zero Shot Learning
            </div>
            <div className="publicationAbstact">
                We propose three information-theoretic loss functions for 
                deterministic Generalized zero shot learning models: 
                a mutual information loss to bridge seen data and target classes; 
                an uncertainty-aware entropy constraint loss to 
                prevent overfitting when using seen data to 
                learn the embedding of target classes; 
                a semantic preserving cross entropy loss to 
                preserve the semantic relation when mapping the semantic representations to 
                the common space.
            </div>
        </div>
        
        </>
    )
}
