import SectionFirstHome from '../components/section1st.home';
import Footer from '../components/footer.comp'
import BackgroundPng from '../assets/Apekings andfrineds thumpnail.png'
import BackgroundS2 from '../assets/2obor.jpg'
import TrheerdSeries from '../assets/themages.png'
import TwondSeriesTumbnail from '../assets/The-King-servent-revive-the-ally.png'
import Sercent from '../assets/Sercent.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../components/css/css_dash/dash.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ReadisCoomingshoots from '../assets/rrts.jpg'
function Home({props}){
    console.log(Sercent,'dash')
    const data=[
        {
            altimage:"rumor c",
            ImageMain:BackgroundPng,
            Title:"1st Series Evil Ape and Friends | Intro of the story a kings",
            contents:"Evil Ape Kings is stronger in Piceaia Kingdoms has 1 of 21 kingdoms of Carcea World, he is Dangerous with the enemy and soft with allies. He got the name Evil Ape Kings because when he command war to defend his land ",
            tableName:"ApeKings&Friend 1st",
            tableTier:"BRONZE",
            tableCrypto:"ETH on Polygon",
            tableSupply:"19",
            tablePrice:"0.03 ETH",
        
        },
        {
            altimage:"rumor c",
            ImageMain:Sercent,
            Title:"2nd Series of Evil Ape and Friends | King Founder Piceaia",
            contents:"The Evil Ape Kings Founder a Piceaia feudal kingdom names Sercent Rouldy, he had two servants names leas and lias, they are Rabbat. Rabbat its race both rabbit and African bat had specification to cast wind and water magic.",
            tableName:"Ape King Founder",
            tableTier:"Silver",
            tableCrypto:"ETH on Polygon",
            tableSupply:"1000",
            tablePrice:"0.02 ETH",
        
        },
        {
            altimage:"rumor c",
            ImageMain:TwondSeriesTumbnail,
            Title:"3rd Series of Evil Ape and Friends | The Sercent make a contract",
            contents:"The Servant Summoner by the Sercent in the highland cave, it is said that he became able to use two different magic attributes from his own element, and got two attributes from the servent that served him",
            tableName:"The Sercent make a contract",
            tableTier:"Silver",
            tableCrypto:"ETH on Polygon",
            tableSupply:"1000",
            tablePrice:"0.02 ETH",
        
        },
        {
            altimage:"rumor c",
            ImageMain:TrheerdSeries,
            Title:"4nd Series of Evil Ape and Friends | The Friends of Mages",
            contents:"The friends of mages had a story of the childhood of king 1st of Peceaia kingdom, occurred the names of the legendary monsters Treantdiabolic,create new devine technology to clash Treantdiabolic ",
            tableName:"The Friends of Mages",
            tableTier:"Silver",
            tableCrypto:"ETH on Polygon",
            tableSupply:"1000",
            tablePrice:"0.02 ETH",
        
        },
        {
            altimage:"rumor c",
            ImageMain:BackgroundS2,
            Title:"4nd Series of Evil Ape and Friends | Rise of Roseraws Race",
            contents:"The friends of mages had a story of the childhood of king 1st of Peceaia kingdom, occurred the names of the legendary monsters Treantdiabolic,create new devine technology to clash Treantdiabolic ",
            tableName:"comming soon",
            tableTier:"comming soon",
            tableCrypto:"ETH on Polygon",
            tableSupply:"1000",
            tablePrice:"0.02 ETH",
        
        }

    ]
    return(
        <div className='blockshare'>
            <h1>NFT Series</h1>
             <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                {
                data.map((item,index)=>{
                    return(
                    <div>
                        <Card sx={{ maxWidth: 345 ,margin:5}}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={item.ImageMain}
                                    alt={item.altimage}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {item.Title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                {item.contents}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Go NFT</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                        </Card>
                        <div className="floatingbackground" style={{marginLeft:10}}>
                        <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Tier</th>
                                    <th>Crypto</th>
                                    <th>Total Supply</th>
                                    <th>Floor Price </th>
                                </tr>
                                <tr>
                                    <td> ApeKings&Friend 1st </td>
                                    <td> BRONZE </td>
                                    <td> ETH on Polygon  </td>
                                    <td> 19 </td>
                                    <td> 0.03 ETH </td>
                                </tr>
                        </table>
                        </div>
                    </div>
                    )
                })
            }
                </Grid>
             </Box>
             <h1>Animation Series</h1>
             <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                {
                data.map((item,index)=>{
                    return(
                    <div>
                        <Card sx={{ maxWidth: 345 ,margin:5}}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={ReadisCoomingshoots}
                                    alt={item.altimage}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {item.Title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                {item.contents}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Youtube</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                        </Card>
                        <div className="floatingbackground" style={{marginLeft:10}}>
                        <table>
                                <tr>
                                    <th>Name</th>
                                    <th>Tier</th>
                                    <th>Crypto</th>
                                    <th>Total Supply</th>
                                    <th>Floor Price </th>
                                </tr>
                                <tr>
                                    <td> ApeKings&Friend 1st </td>
                                    <td> BRONZE </td>
                                    <td> ETH on Polygon  </td>
                                    <td> 19 </td>
                                    <td> 0.03 ETH </td>
                                </tr>
                        </table>
                        </div>
                    </div>
                    )
                })
            }
                </Grid>
             </Box>
           
        
        
            <Footer/>
        </div>
    )
}

export default Home;