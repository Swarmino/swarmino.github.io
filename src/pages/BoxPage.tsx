import Box from "../components/Box";

const BoxPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">

        <h1 className="text-white text-xl font-bold">Victor Falck-Næss</h1>

            <div className="flex flex-row">
                <Box linkTo="/about" label="About" />
                <Box linkTo="/projects" label="Projects" />
            </div>

            <div className="flex flex-row">
                <Box linkTo="/contact" label="Contact" />
                
                <Box linkTo="https://linktr.ee/VictorMakesGames" label="Socials" />
            </div>

        </div>
    );
}

export default BoxPage;
