const GET_ALL = 'SELECT id, name, color FROM groups';
const GET_BY_ID = '${GET_ALL} where id= $1';
const DELETE_BY_ID = 'DELETE FROM groups WHERE id = $1';
const CREATE = `
    INSERT INTO groups (name, color)
    VALUES ($1,$2)
    RETURNING id, name, color
`;

const Repository = (dbClient) => {

    const getAll = async () => {

        const result = await dbClient.query(GET_ALL);

        return result.rows;
    };

    const getById = async () => {

        const result = await dbClient.query(GET_BY_ID, [id]);
        return result.rows[0];

    };

    const deleteById = async (id) => {
        const result = await dbClient.query(DELETE_BY_ID, [id]);
        return result.rowCount > 0;
    }

    const create = async ({name, color}) => {
        const result = await dbClient.query(CREATE, [name, color]);
        return result.rows[0];
    }


    return {
        getAll,
        getById,
        deleteById,
        create
    };
};

export default Repository;
