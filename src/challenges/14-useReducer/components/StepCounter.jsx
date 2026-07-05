import { useReducer } from "react";
import { counterReducer } from "../reducer/counterReducer";

function StepCounter() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    step: 1,
  });

  return (
    <div>
      <h2>Step Counter</h2>
      
      <div style={{ fontSize: "3rem", fontWeight: "bold" }}>
        {state.count}
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>
          Step Size: 
          <input
            type="number"
            value={state.step}
            onChange={(e) =>
              dispatch({
                type: "SET_STEP",
                payload: parseInt(e.target.value) || 0,
              })
            }
            min="1"
            style={{
              marginLeft: "10px",
              padding: "4px 8px",
              width: "60px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </label>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button
          onClick={() => dispatch({ type: "INCREMENT" })}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          +{state.step}
        </button>
        
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          -{state.step}
        </button>
        
        <button
          onClick={() => dispatch({ type: "RESET" })}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ffa94d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>
      
      <div style={{ marginTop: "10px", fontSize: "0.9rem", color: "#666" }}>
        Current step: {state.step}
      </div>
    </div>
  );
}

export default StepCounter;