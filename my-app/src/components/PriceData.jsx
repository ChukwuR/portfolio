import Price from "./Price";
import './PriceData.css'

function PriceData(){

    const price = [
        {
            id:'1',
            priceRegion:'North America (USA, Canada)',
            priceHour:'$60-$150+',
            priceProject:'$5,000-$50,000+',
            priceConsult:'$200-$500 per session',
            flag: <img src="https://www.shutterstock.com/image-illustration/faded-canada-vs-usa-national-600nw-2180422453.jpg" id="imgFlag" style={{width:'200px', height:'100px', borderRadius:'20px'}} alt="" />
        },
        {
            id:'2',
            priceRegion:'Western Europe (UK, Germany, France)',
            priceHour:'$50-$120',
            priceProject:'$4,000-$40,000',
            priceConsult:'$150-$400 per session',
            flag: <img src="https://d3lzcn6mbbadaf.cloudfront.net/media/details/one_two_three_jan06.jfif" id="imgFlag" style={{width:'200px', height:'100px', borderRadius:'20px'}} alt="" />
        },
        {
            id:'3',
            priceRegion:'Eastern Europe (Poland, Ukraine, Romania)',
            priceHour:'$25-$60',
            priceProject:'$2,000-$20,000',
            priceConsult:'$100-$250 per session',
            flag: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-5Tml-Iivhf5OgENA2R0XT7KlbzRLCNNbA&s" id="imgFlag" style={{width:'200px', height:'100px', borderRadius:'20px'}} alt="" />
        },
        {
            id:'4',
            priceRegion:'Asia (India, Philippines, Vietnam)',
            priceHour:'$15-$40',
            priceProject:'$1,000-$15,000',
            priceConsult:'$50-$200 per session',
            flag: <img src="https://i0.wp.com/366e203a.rocketcdn.me/wp-content/uploads/2017/01/Vietnam-India-Philippines.jpg" id="imgFlag" style={{width:'200px', height:'100px', borderRadius:'20px'}} alt="" />
        },
        {
            id:'5',
            priceRegion:'Latin America (Brazil, Argentina, Mexico)',
            priceHour:'$20-$50',
            priceProject:'$2,000-$25,000',
            priceConsult:'$100-$300 per session',
            flag: <img src="https://media.licdn.com/dms/image/v2/D4D12AQE2bYZKnExURg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691844580505?e=2147483647&v=beta&t=zWvAZdKPQi2cvPf9qCpePvr_zi2eoszfXFYpaADLJd0" id="imgFlag" style={{width:'200px', height:'100px', borderRadius:'20px'}} alt="" />
        },
        {
            id:'6',
            priceRegion:'Africa (Nigeria, South Africa, Kenya)',
            priceHour:'$15-$40',
            priceProject:'$1,500-$15,000',
            priceConsult:'$50-$200 per session',
            flag: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqjfZFlYJxqpSLSTyxoXxmzrXKATcdADQy1n9Shb4UvAP8d7wF1dMAlMV9ApY8RzJt_ms&usqp=CAU" id="imgFlag" style={{width:'200px', height:'100px', borderRadius:'20px'}} alt="" />
        }
    ]

    return(
        <>
            <h1 style={{fontFamily:"'Audiowide', cursive", color:'white'}}>Pricing & Services</h1>
            <Price priceRegion={price[0].priceRegion}
            priceHour={price[0].priceHour}
            priceProject={price[0].priceProject}
            priceConsult={price[0].priceConsult}
            flag={price[0].flag} />

            <Price priceRegion={price[1].priceRegion}
            priceHour={price[1].priceHour}
            priceProject={price[1].priceProject}
            priceConsult={price[1].priceConsult}
            flag={price[1].flag} />

            <Price priceRegion={price[2].priceRegion}
            priceHour={price[2].priceHour}
            priceProject={price[2].priceProject}
            priceConsult={price[2].priceConsult}
            flag={price[2].flag} />

            <Price priceRegion={price[3].priceRegion}
            priceHour={price[3].priceHour}
            priceProject={price[3].priceProject}
            priceConsult={price[3].priceConsult}
            flag={price[3].flag} />

            <Price priceRegion={price[4].priceRegion}
            priceHour={price[4].priceHour}
            priceProject={price[4].priceProject}
            priceConsult={price[4].priceConsult}
            flag={price[4].flag} />

            <Price priceRegion={price[5].priceRegion}
            priceHour={price[5].priceHour}
            priceProject={price[5].priceProject}
            priceConsult={price[5].priceConsult}
            flag={price[5].flag} />
        </>
    )
}
export default PriceData;