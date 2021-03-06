import React, { useEffect, useState } from 'react';
import { Container} from 'react-bootstrap';
import LargePack from './LargePack/LargePack';
import SmallPack from './SmallPack/SmallPack';

const Package = () => {
    const [tourPack, setTourPack] = useState([])
    const tourism = tourPack.filter(packs => packs.cost <= 3500)
    const tourisms = tourPack.filter(combo => combo.cost >= 7000)
   
    //Using GET API From DB
    useEffect(() => {
        fetch('https://rocky-wildwood-05535.herokuapp.com/tourism')
            .then(res => res.json())
        .then(data => setTourPack(data))
    },[])
    return (
        <>
            <Container id="zone" className="my-5">            
                <h2 className="text-center">TouristsZone Holidays</h2>
                    <p className="text-center">Choose your best package to join world adventure club</p>
                <div>
                    {tourism?.map(tours => <SmallPack key={tours._id} tours={tours}> </SmallPack>  )         }
                </div>
                <div className="tourzone my-3">
                    {tourisms?.map(tours => <LargePack key={tours._id} camp={tours}> </LargePack>)         }
                </div>
            </Container>
        </>
    );
};

export default Package;