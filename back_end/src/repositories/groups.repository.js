const GET_ALL = 'SELECT id, name, color FROM groups';
const GET_BY_ID = '${GET_ALL} where id= $1';

const Repository = (dbClient)=>{
    
    const getAll = async () => {

        const result = await dbClient.query(GET_ALL);
        
        return result.rows;
    };

    const getById = async () =>{
        const result = await dbClient.query(GET_BY_ID, [id]);
        
        return result.rows[0];

    }
    return {
        getAll,
        getById
    };
};

export default Repository;
