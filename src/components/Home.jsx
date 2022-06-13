import React, {useState, useEffect} from 'react'
import CryptoTile from './CriptoTile'
import BuyForm from './BuyForm'
import Transactions from './Transactions'
import btc from '../assets/btc.png'
import eth from '../assets/eth.png'
import ltc from '../assets/ltc.png'

const Home = () => {

    const tiles = [
        {id: 1, icon: btc, name: 'BTC', rate: 135000},
        {id: 2, icon: eth, name: 'ETH', rate: 7500},
        {id: 3, icon: ltc, name: 'LTC', rate: 250},
    ]

    const [selectedTile, setSelectedTile] = useState(tiles[0])
    const [list, setList] = useState([])

    const handleSelect = (data) => {
        setSelectedTile(data)
    }

    const buildList = (list) => {
        setList(list)
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        {
                            tiles.map(
                                (coin) =>(
                                    <CryptoTile 
                                        key={coin.id}
                                        data={coin}
                                        onClick={handleSelect}
                                        selectedTile={coin.id === selectedTile.id}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
                <BuyForm data={selectedTile} onPurchase={buildList}/>
                <div>
                    <Transactions list={list} />
                </div>
            </div>
        </div>
    )
}

export default Home
