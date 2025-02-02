import Welcome from "./Welcome"
export const Dummy1 = () => {
    return (
        <div>
            <Welcome name={'Bakkar'} email={'kaku@gmail.com'}/>
            <p className="text-black">Here I use the Welcome component and pass the props;</p>
        </div>
    )
}