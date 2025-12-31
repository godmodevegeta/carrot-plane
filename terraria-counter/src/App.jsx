import { useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <h1 style={{ color: '#d9c5b2', textShadow: '4px 4px 0 #3c3024', marginBottom: '40px' }}>
        Terraria UI Prototype
      </h1>

      <div className="demo-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        <p style={{ color: '#aaa', fontStyle: 'italic' }}>Copper Ore Balance</p>
        <Counter initialValue={17} threshold={10} />

        <p style={{ color: '#aaa', fontStyle: 'italic', marginTop: '40px' }}>Low Resource Example (Iron)</p>
        <Counter initialValue={5} threshold={10} iconPath="/assets/copper_ore.png" />
      </div>

      <div className="info-box" style={{
        marginTop: '60px',
        padding: '20px',
        background: 'rgba(60, 48, 36, 0.8)',
        border: '4px solid #3c3024',
        color: '#d9c5b2',
        maxWidth: '500px',
        textAlign: 'left'
      }}>
        <h3 style={{ marginTop: 0 }}>Design Principles:</h3>
        <ul style={{ paddingLeft: '20px' }}>
          <li><strong>Visual Hierarchy:</strong> Thick pixelated borders and paper texture.</li>
          <li><strong>Responsive Feedback:</strong> Number "pops" on change to draw the eye.</li>
          <li><strong>Cognitive Load:</strong> Minimalist display with immediate status cues (red flash).</li>
        </ul>
      </div>
    </div>
  )
}

export default App
