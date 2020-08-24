import React from 'react';

function HouseGridItem(props) {
    const { images } = props;

    
    return (
        <React.Fragment>
            {images.map((el) => {
                if (el.size === 'half') {
                    return (
                        <div className='top-item'>
                            <img src={el.src}/>
                        </div>
                    )
                } else {
                    return (
                        <React.Fragment>
                            
                             <div className='full-item'>
                            <img src={el.src}/>
                            </div>
                            <div className='top-item'>

                            </div>
                       </React.Fragment>
                    )
                }
          })}
        </React.Fragment>
    )
       
}

export default HouseGridItem
