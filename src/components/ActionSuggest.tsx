interface CardProps {
    title: string;
    iconUrl: string; // URL của icon
  }
  
  const Card: React.FC<CardProps> = ({ title, iconUrl }) => {
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', display: 'flex', alignItems: 'center' }}>
        <img src={iconUrl} alt={title} style={{ marginRight: '10px' }} />
        <span>{title}</span>
        <button style={{ marginLeft: 'auto' }}>+</button>
      </div>
    );
  };
  
  const ActionSuggest: React.FC = () => {
    return (
      <div>
        <Card title="Read" iconUrl="đường-dẫn-tới-icon-đọc" />
        <Card title="Study" iconUrl="đường-dẫn-tới-icon-học" />
      </div>
    );
  };
  
  export default ActionSuggest;