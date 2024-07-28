import { useEffect } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const passwordFieldRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if(charAllowed) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    for (let i = 1; i <= length; i++) {
      let charNum = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(charNum)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

 const copyToClipboard = useCallback(() =>{
  passwordFieldRef.current?.select()
  // passwordFieldRef.current?.setSelectionRange(0, 4)
  window.navigator.clipboard.writeText(password)
 }, [password])

  return (
    <div className="flex justify-center items-start flex-col gap-4 py-3 px-5 max-w-lg bg-slate-800 mx-auto rounded-lg">
      <p className="text-center font-bold w-full text-lg">Password Generator</p>
      <div className="flex justify-center align-top w-full font-bold">
        <input
          type="text"
          value={password}
          placeholder="Password"
          readOnly
          ref={passwordFieldRef}
          className="w-full rounded-l-lg text-lg text-orange-500  py-1 px-4 outline-none selection:bg-blue-200"
        />
        <button className="bg-blue-600 rounded-r-lg py-1 px-4 text-lg" onClick={copyToClipboard}>
          Copy
        </button>
      </div>
      <div className="text-orange-500 flex justify-start items-center gap-3 font-semibold select-none">
        <div className="flex justify-start items-center gap-1 flex-wrap">
          <input type="range" value={length} min={6} max={20} onChange={(e) => setLength(e.target.value)} className="cursor-pointer"/>
          <p>Length ({length})</p>
        </div>
        <div className="flex justify-start items-center gap-1 flex-wrap">
          <input type="checkbox" name="numbers" id="numbers" checked={numberAllowed} onChange={() => setNumberAllowed(prev => !prev)}/>
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex justify-start items-center gap-1 flex-wrap">
        <input type="checkbox" name="character" id="character" checked={charAllowed} onChange={() => setCharAllowed(prev => !prev)}/>{" "}
        <label htmlFor="character">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
