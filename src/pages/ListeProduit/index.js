import images from '../../images/Gants_1.jpg';
import './styles.css';

const ListeProduit = () => {
    return (
      <div id="listeProduit">
        <div className="liste">
          <div className="title">
            <h2>Gants moto</h2>
            <h2>Voir plus</h2>
          </div>
          <div className='flex-vignette'>
            <div className="vignette">
              <img src={images} />
              <div className="subTitle">
                <div>
                  <h4>Gants jet D30 noir</h4>
                  <h6>PARIS 17 - il y a deux jours</h6>
                </div>
                <div className='price'>
                  <h3>12€</h3>
                </div>
              </div>
            </div>
            <div className="vignette">
              <img src={images} />
              <div className="subTitle">
                <div>
                  <h4>Gants jet D30 noir</h4>
                  <h6>PARIS 17 - il y a deux jours</h6>
                </div>
                <div className='price'>
                  <h3>12€</h3>
                </div>
              </div>
            </div>
            <div className="vignette">
              <img src={images} />
              <div className="subTitle">
                <div>
                  <h4>Gants jet D30 noir</h4>
                  <h6>PARIS 17 - il y a deux jours</h6>
                </div>
                <div className='price'>
                  <h3>12€</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="liste">
          <div className="title">
            <h2>Gants été</h2>
            <h4>Voir plus</h4>
          </div>
          <div className="vignette">
            <img src={images} />
            <div className="subtTitle">
              <div>
                <h4>Gants jet D30 noir</h4>
                <h6>PARIS 17 - il y a deux jours</h6>
              </div>
              <div>
                <h3>12€</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="liste">
          <div className="title">
            <h2>Gants hiver</h2>
            <h4>Voir plus</h4>
          </div>
          <div className="vignette">
            <img src={images} />
            <div className="subtTitle">
              <div>
                <h4>Gants jet D30 noir</h4>
                <h6>PARIS 17 - il y a deux jours</h6>
              </div>
              <div>
                <h3>12€</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ListeProduit;