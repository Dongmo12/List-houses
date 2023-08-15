import House from "../house";

const FeaturedHouse = ({house}) => {
    if(house)
        return ( 
            <div id="featureHouse">
                <div className="row featureHouse">
                    <h3 className="col-md-12 text-center">Featured house</h3>
                </div>
                <House house={house} />
            </div>
        );
};
 
export default FeaturedHouse;