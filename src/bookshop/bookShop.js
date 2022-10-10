import { faBars, faBook, faBookOpenReader, faFaceGrinBeamSweat, faGun, faHome, faSearch, faSkullCrossbones, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import './style.css'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import getIneformation from '../api/api';

const BookShop = () => {  
    const [age, setAge] = React.useState(''); 
    const [photos, setPhotos] = useState([]);
    console.log(photos);

    useEffect(() => {
        getIneformation(setPhotos);
    }, [])

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [sideshow, setSideshow] = useState(true)

    function sideShow() {
        setSideshow(!sideshow)
        console.log(sideshow);
    }

    return (
        <div>
            <header className='header h100'>
                <div className='d-flex align-items-center'>
                    <Button onClick={sideShow} variant="contained"> <FontAwesomeIcon className='px-1' icon={faBars} /> All categoria</Button>
                    <div className='cont-search d-flex ms-2'>
                        <input type="text" className='ms-1' placeholder='search' />
                        <span className="input-group-text" id="basic-addon2"> <FontAwesomeIcon icon={faSearch} /> </span>
                    </div>
                </div>
                <div><img src="http://wpdemo.magikthemes.com/fluence/wp-content/uploads/sites/22/2017/08/logo.png" className='' alt="" /></div>
                <div>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
            </header>
            <div className='d-flex bg-bg w-100'>
                <div className={` ${sideshow ? 'sidebar' : "d-none-side"}  `}>
                    <ul>
                        <li> <FontAwesomeIcon icon={faHome} /> All</li>
                        <li> <FontAwesomeIcon icon={faSearch} /> detictive</li>
                        <li> <FontAwesomeIcon icon={faBook} /> literature</li>
                        <li> <FontAwesomeIcon icon={faGun} /> xorror</li>
                        <li> <FontAwesomeIcon icon={faFaceGrinBeamSweat} /> comedy</li>
                        <li> <FontAwesomeIcon icon={faSkullCrossbones} /> tragedy</li>
                        <li> <FontAwesomeIcon icon={faBookOpenReader} /> comics</li>
                    </ul>
                </div>
                <div className='rightSide w-100 p-4'>
                    <div className="row"> 
                        {photos.map((v,i) => {
                            return(
                                <div className="col-12 col-md-6 col-lg-3 p-3">
                            <div className="card">
                                <img src={`${v.thumbnailUrl}`}  alt="" />
                                <div className='p-2'>
                                    <p className='mb-0 '>{v.id}</p>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <p className='mb-0 price'>65467$</p>
                                    <Button className='m-1 my-2' variant="contained">Add to card</Button>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                        <div className="col-12 col-md-6 col-lg-3 p-3">
                            <div className="card">
                                <img src="http://wpdemo.magikthemes.com/fluence/wp-content/uploads/sites/22/2016/01/product10-5-270x330.jpg" alt="" />
                                <div className='p-2'>
                                    <p className='mb-0 '>name</p>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <p className='mb-0 price'>65467$</p>
                                    <Button className='m-1 my-2' variant="contained">Add to card</Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-3">
                            <div className="card">
                                <img src="http://wpdemo.magikthemes.com/fluence/wp-content/uploads/sites/22/2016/01/product10-5-270x330.jpg" alt="" />
                                <div className='p-2'>
                                    <p className='mb-0 '>name</p>
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <p className='mb-0 price'>65467$</p>
                                    <Button className='m-1 my-2' variant="contained">Add to card</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookShop