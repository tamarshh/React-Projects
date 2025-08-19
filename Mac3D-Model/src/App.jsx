import { Canvas } from '@react-three/fiber'
import React from 'react'
import './style.css'

import MacContainer from './MacContainer'
import { Environment, ScrollControls } from '@react-three/drei'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const App = () => {
    return (
        <div className="w-full h-screen font-['Helvetica_Now_Display'] relative">
            <div className='absolute top-0 z-10 flex gap-10 pt-10 pb-3 -translate-x-1/2 navbar line left-1/2'>
                {
                    ["iphone", "iPad", "ios", "mac", "services", "products", "policy"].map((e) => (
                        <a href="#" className='text-white font-[400] text-sm capitalize' key={e}>
                            {e}
                        </a>
                    ))
                }
            </div>

            <div className="absolute z-20 flex flex-col items-center text-white -translate-x-1/2 top-28 left-1/2">
                <h3 className=' masked text-7xl tracking-tighter font-[700]'>macbook pro.</h3>
                <h5>Oh so pro!</h5>
                <p className='w-3/4 text-center'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quidem amet ipsa natus, accusantium delectus doloribus.</p>
            </div>

            <Canvas camera={{ fov: 12, position: [0, 10, 220] }} style={{ zIndex: 0 }}>
                <Environment files={[
                    // Corrected URL: Removed Markdown link syntax
                    "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
                ]} />

                <EffectComposer>
                    <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
                </EffectComposer>

                <ScrollControls pages={3} damping={0.2}>
                    <MacContainer />
                </ScrollControls>
            </Canvas>
            {/* <div style={{ height: '200vh' }}></div> */}
        </div>
    )
}

export default App;