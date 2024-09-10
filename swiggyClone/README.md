/**
 * Header
 *  -Logo
 *  -Nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *    -RestaurantCard
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -content
 */

 #config driven Ui--> a technique that allows you to create dynamic and customizable UIs without hard-coding them. You use a JSON file that specifies the type, size, position, and data source for each component

 #default export/import
 export default Header;
 import Header from "./dds/dsd";

 #named export/import
 export const FOOTER = "ddwdwd/dwdwdwd";
 import {FOOTER} from "file_path";


 #note 
 --> When ever a state variable updates,react re-renders the component
 1.) react fiber
 2.) Reconcialtion

 3.) useEffect--> useEffect get called after the component get rendered
 4.) whenever state variable update,react triggers a reconciliation cycle(re-renders the components)

<li><a href="/about">About Us</a></li>==> it reload page when re-direct to about
<li><Link to="/contact">Contact Us</Link></li> ==> it don't reload page when re-direct ==> react-router-dom==> clint side routing