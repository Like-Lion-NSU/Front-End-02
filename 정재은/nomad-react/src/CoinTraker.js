import { useEffect, useState } from "react";

function Cointraker(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins]=useState([]);
    const [amount, setAmount]=useState(0);
    const [coinName, setCoinName]=useState();
    const [coinPrice,setCoinPrice]=useState();
    const onChange=(event)=>{
        setCoinName(event.target.value);
        setCoinPrice(event.target.options[event.target.selectedIndex].dataset.price); // 선택된 코인의 가격 가져오기
    }
    const calculate = () => {
        if (!coinPrice || isNaN(amount)) return 0;
        return Math.round(amount / coinPrice);
      };
    const inputChange=(event)=>setAmount(parseFloat(event.target.value));
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers").then((response)=>response.json())
        .then((json)=>{
            setCoins(json);
            setLoading(false); //코인을 불러오면 Loading이 끝나게
        })
    },[]);
    
    return(
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading?<strong>Loading</strong>:(
            <select onChange={onChange}>
                {coins.map((coin)=>( //coin : coins 배열 안에 있는 각각의 coin
                    <option
                        value={coin.name}
                        data-price={coin.quotes.USD.price}
                        /*여기서 value로 이름을 지정해줘야 아래에서 가져올 수 있음*/
                    >
                        {coin.name}({coin.symbol}):${coin.quotes.USD.price} USD
                    </option>
                ))}
            </select>)}
            <div> 보유 달러 : <input type="text" onChange={inputChange}/></div>
            <div>{coinName}의 구매 가능 개수 : {new Intl.NumberFormat().format(calculate())}</div> 
            
        </div>
    )
}
export default Cointraker