// src/components/Home.js
import InfoCard from "./InfoCard";

const Home = () => {
    const infoCards = [
        { title: "Dog Detail", description: "Find detailed profiles of all Dog Breed's." },
        { title: "New inventory", description: "Everyday providing a new home for your dog" },
        { title: "Dog News", description: "Stay updated with the latest news and updates from Adoption Center." },
    ];

    return (
        <div className="header">
            <h2>Welcome to the Dog Adoption</h2>
            <p>Details on any Dog Breed</p>
            <div className="info-cards">
                {infoCards.map((card, index) => (
                    <InfoCard key={index} title={card.title} description={card.description} />
                ))}
            </div>
        </div>
    );
};

export default Home;