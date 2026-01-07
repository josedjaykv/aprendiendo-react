import { useEffect, useState } from "react"

const FoolowMouse = () => {
  const[enabled, setEnable] = useState(false);
  const[position, setPosition] = useState({ x:0, y:0 });

  const seguir = () => {
    setEnable(!enabled)
  }

  // pointer move
  useEffect(() => {
    console.log('UseEffect', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x:clientX, y:clientY });
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
 
    // Limpiar la suscripción
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled]); 

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled); 

    return () => {
      document.body.classList.remove('no-cursor');
    }
  }, [enabled])

  return (
    <>
      <div style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left:-20,
          top:-20,
          width:40,
          height: 40,
          transform:`translate(${position.x}px, ${position.y}px)`
        }}/>
      <h3>Proyecto 3</h3>
      <button onClick={seguir}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App() {
  const [mounted, setMounted] = useState(true);

  return (
    <main>
      {mounted && <FoolowMouse />}
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse component</button>
    </main>
  )
}

export default App
