import Link1 from "../component/portofiloskills"
import Link2 from "../component/portfilospecialcolor"

export default function portfilio(){
    return<>
    <div>
        <h1>
            
            <div className="portmain">
            <h2> Portfolio</h2>
            <div className="portofilocategories">
                <Link1 name="Web app" />
                <Link2 name="Web design"  />
                <Link1 name="Mobile app" />
                </div>
                <div className="portofilocategories">
                <Link2 name="Destop APP" />
                <Link1 name="E-Commerce web app" />
                 <Link2 name="Rich Internet web app" />
                 </div>
            

            </div>
        </h1>
    </div>

    </>
}