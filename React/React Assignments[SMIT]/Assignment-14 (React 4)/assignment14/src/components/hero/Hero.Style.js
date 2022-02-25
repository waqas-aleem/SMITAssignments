import backgroundImage from '../../assests/images/hero_image.png';

export const HeroStyles = {

    heroImage:{
        backgroundImage: `linear-gradient(90deg, rgba(255, 255, 255, 0.9) 16.58%, rgba(255, 255, 255, 0) 72.38%),url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%', 
        
    },
    heroText:{
        fontFamily: 'Work Sans',
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: '72px',
        lineHeight: '84px',
        color: '#292E3D',
        position: 'absolute',
        top: '239px',
        left: '112px',
        bottom: '239px',
     
    },
     
};


 