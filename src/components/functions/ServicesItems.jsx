import { TfiLocationPin } from 'react-icons/tfi';
import { BsBusFront, BsPersonFillAdd, BsFillCameraReelsFill } from 'react-icons/bs';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { TbBuildingCarousel, TbChairDirector } from 'react-icons/tb';
import { MdMicExternalOn, MdComputer } from 'react-icons/md';
import { BiRestaurant } from 'react-icons/bi';
import { GoMegaphone } from 'react-icons/go';


export const ServicesItems = [
  [
    {
      id: 1,
      icon: TfiLocationPin,
      name: 'Búsqueda de Espacios',
    },
    {
      id: 2,
      icon: BsBusFront,
      name: 'Transporte', 
    },
    {
      id: 3,
      icon: TbBuildingCarousel,
      name: 'Entretenimiento y Recreación ',  
    },
    {
      id: 4,
      icon: BsPersonFillAdd,
      name: 'Contratación de personal',  
    },
    {
      id: 5,
      icon: BsFillCameraReelsFill,
      name: 'Producción Audiovisual',  
    },
    {
      id: 6,
      icon: HiOutlineBuildingLibrary,
      name: 'Montaje y/o Escenografía',  
    }
  ],
  [
    {
      id: 7,
      icon: MdMicExternalOn,
      name: 'Artistas y/o Shows',  
    },
    {
      id: 8,
      icon: BiRestaurant,
      name: 'Catering',  
    },
    {
      id: 9,
      icon: TbChairDirector,
      name: 'Alquiler de Mobiliario',  
    },
    {
      id: 10,
      icon: GoMegaphone,
      name: 'Publicidad para tu Marca o Empresa',  
    },
    {
      id: 11,
      icon: MdComputer,
      name: 'Marketing Digital',  
    }
  ]
]
