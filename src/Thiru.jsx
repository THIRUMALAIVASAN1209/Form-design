export const TriggerContext= createContext();

function Thiru() {
  let [change,setChange] = useState(true);
return(
  <>  
    <div>
    <button onClick={()=>{
      setChange(!change)
    }}
    >Change</button> 

    <TriggerContext.Provider value={change}>
      <Hen></Hen>
    </TriggerContext.Provider>
    </div>
  </>
)
  
   
}

export default Thiru
