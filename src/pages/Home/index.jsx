

import { useEffect, useState } from "react";
import api from "../../service/api";

const defaultHighlights = [
    { id: 1, title: "Destaque 1", description: "Informação importante sobre saúde" },
    { id: 2, title: "Destaque 2", description: "Informação importante sobre saúde" },
    { id: 3, title: "Destaque 3", description: "Informação importante sobre saúde" },
    { id: 4, title: "Destaque 4", description: "Informação importante sobre saúde" }
];

function Home() {
    const [destaquesData, setDestaquesData] = useState(defaultHighlights);
    const [loadingHighlights, setLoadingHighlights] = useState(true);

    useEffect(() => {
        const parseHighlights = (data) => {
            if (!data) return [];
            if (Array.isArray(data)) {
                return data.slice(0, 4).map((item, index) => ({
                    id: item.id || index + 1,
                    title: item.title || item.name || `Destaque ${index + 1}`,
                    description: item.description || item.notes || item.title || "Informação importante sobre saúde"
                }));
            }

            const records = data.result?.records || data.records || data.dataset || data.datasets || data.data || data.results;
            if (Array.isArray(records)) {
                return records.slice(0, 4).map((item, index) => ({
                    id: item.id || item.uuid || index + 1,
                    title: item.title || item.name || item.title_dataset || `Destaque ${index + 1}`,
                    description: item.description || item.notes || item.title || "Informação importante sobre saúde"
                }));
            }

            return [];
        };

        const loadHighlights = async () => {
            try {
                const response = await api.get("");
                const items = parseHighlights(response.data);
                if (items.length) {
                    setDestaquesData(items);
                }
            } catch (error) {
                console.error("Erro ao buscar destaques da saúde:", error);
            } finally {
                setLoadingHighlights(false);
            }
        };

        loadHighlights();
    }, []);


    const dicasData = [
        { id: 1, title: "Dica 1", description: "Dica prática para sua saúde" },
        { id: 2, title: "Dica 2", description: "Dica prática para sua saúde" },
        { id: 3, title: "Dica 3", description: "Dica prática para sua saúde" },
        { id: 4, title: "Dica 4", description: "Dica prática para sua saúde" }
    ];

    const bemEstarData = [
        { id: 1, title: "Bem-Estar 1", description: "Conselhos para seu bem-estar" },
        { id: 2, title: "Bem-Estar 2", description: "Conselhos para seu bem-estar" },
        { id: 3, title: "Bem-Estar 3", description: "Conselhos para seu bem-estar" },
        { id: 4, title: "Bem-Estar 4", description: "Conselhos para seu bem-estar" }
    ];

    return (
        <div className="home relative min-h-screen w-full">
            <div className="relative z-10 mx-auto max-w-[1400px] bg-white/20 border border-white/10 rounded-3xl p-8 shadow-xl">
                <h1 className="text-center text-3xl font-bold mb-12">Sejá bem-vindo! </h1>
                <h2 className="text-center text-2xl font-bold mb-12">Ao Papo&Saúde</h2>

                {/* Seção Destaques da Saúde */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Destaques da Saúde</h2>
                    {loadingHighlights && (
                        <p className="text-center text-sm text-gray-500 mb-6">Carregando destaques da saúde...</p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {destaquesData.map(item => (
                            <div key={item.id} className="bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção Dica de Saúde */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Dica de Saúde</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {dicasData.map(item => (
                            <div key={item.id} className="bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção Saúde e Bem Estar */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-center">Saúde e Bem Estar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {bemEstarData.map(item => (
                            <div key={item.id} className="bg-white/80 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Home;