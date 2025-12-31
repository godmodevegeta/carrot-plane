import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Counter.css';

const Counter = ({ initialValue = 0, threshold = 10, iconPath = '/assets/copper_ore.png' }) => {
  const [count, setCount] = useState(initialValue);
  const [isPopping, setIsPopping] = useState(false);
  const [shouldShake, setShouldShake] = useState(false);

  useEffect(() => {
    // Trigger pop effect on count change
    setIsPopping(true);
    const timer = setTimeout(() => setIsPopping(false), 200);
    return () => clearTimeout(timer);
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    } else {
      // Shake on attempt to go below zero
      setShouldShake(true);
      setTimeout(() => setShouldShake(false), 300);
    }
  };

  const isLow = count < threshold && count > 0;

  return (
    <div className={`terraria-counter-container ${shouldShake ? 'shake' : ''}`}>
      <motion.img 
        src={iconPath} 
        alt="item icon" 
        className="item-icon"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      />
      
      <div className={`counter-value ${isPopping ? 'counter-pop' : ''} ${isLow ? 'low-resource' : ''}`}>
        {count}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginLeft: '8px' }}>
        <button 
          onClick={increment}
          className="terraria-btn"
          style={{ background: '#4a3b2b', border: '2px solid #3c3024', color: '#fff', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          +
        </button>
        <button 
          onClick={decrement}
          className="terraria-btn"
          style={{ background: '#4a3b2b', border: '2px solid #3c3024', color: '#fff', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
