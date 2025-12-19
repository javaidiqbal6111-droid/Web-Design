
import React from 'react';

const EditorialGrid: React.FC = () => {
  const items = [
    {
      id: '1',
      category: 'Philosophy',
      title: 'Subtle Geometry',
      size: 'col-span-12 md:col-span-7',
      img: 'https://picsum.photos/1200/800?grayscale'
    },
    {
      id: '2',
      category: 'Rituals',
      title: 'Dawn Routine',
      size: 'col-span-12 md:col-span-5',
      img: 'https://picsum.photos/800/1100?grayscale'
    },
    {
      id: '3',
      category: 'Spaces',
      title: 'Ochre & Stone',
      size: 'col-span-12 md:col-span-5',
      img: 'https://picsum.photos/800/1000?grayscale&v=1'
    },
    {
      id: '4',
      category: 'Materials',
      title: 'Raw Linen',
      size: 'col-span-12 md:col-span-7',
      img: 'https://picsum.photos/1200/600?grayscale&v=2'
    }
  ];

  return (
    <section className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 space-y-4 md:space-y-0">
        <h3 className="text-4xl md:text-5xl font-light tracking-tight">Curated Fragments</h3>
        <p className="text-sm uppercase tracking-widest text-[#2D2D2A]/60 max-w-xs text-right italic font-light">
          Observations on the delicate balance of form and function.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-12">
        {items.map((item) => (
          <div key={item.id} className={`${item.size} group cursor-pointer`}>
            <div className="overflow-hidden mb-6 aspect-video md:aspect-auto">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#BFA181] font-bold block mb-2">{item.category}</span>
                <h4 className="text-2xl font-light italic">{item.title}</h4>
              </div>
              <button className="text-xs uppercase tracking-widest border-b border-[#2D2D2A]/20 pb-1 hover:border-[#2D2D2A] transition-colors">View Piece</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorialGrid;
