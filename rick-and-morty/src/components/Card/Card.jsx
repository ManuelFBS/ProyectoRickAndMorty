import styled from './Card.module.scss';

const Card = ({ results }) => {
        let display;

        if (results) {
                display = results.map((element) => {
                        let { id, image, name, status, location } = element;
                        return (
                                <div 
                                        key={id}
                                        className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
                                >
                                        <div className={`${styled.card} d-flex flex-column justify-content-center`}>
                                                <img className={`${styled.img} img-fluid`} src={image} alt='' />
                                                <div className={`${styled.content}`}>
                                                        <div className='fs-5 fw-bold mb-4'>{name}</div>
                                                        <div className=''>
                                                                <div className='fs-6 fw-normal'>Last Location</div>
                                                                <div className='fs-5'>{location.name}</div>
                                                        </div>
                                                </div>
                                        </div>
                                        {
                                                (() => {
                                                        if (status === "Dead") {
                                                                return (
                                                                        <div className={`${styled.badge} position-absolute badge bg-danger`}>
                                                                                {status}
                                                                        </div>
                                                                );
                                                        } else if (status === "Alive") {
                                                                return (
                                                                        <div className={`${styled.badge} position-absolute badge bg-success`}>
                                                                                {status}
                                                                        </div>
                                                                )
                                                        } else {
                                                                return (
                                                                        <div className={`${styled.badge} position-absolute badge bg-secundary`}>
                                                                                {status}
                                                                        </div>
                                                                )
                                                        }
                                                })()
                                        }
                                </div>
                        );
                })
        }
        else {
                display = 'No Characters Found :/';
        }

        return <>{display}</>
}

export default Card;