import data from "../models/data.js";

export const create = async (req, res) => {
    try {
        const tableData = new data(req.body);
        if (!tableData) {
            return res.status(404).json({ msg: "Data for table not found" });
        }
        const savedData = await tableData.save();
        res.status(200).json(savedData);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const getAll = async (req, res) => {
    try {
        const tableData = await data.find();
        if (!tableData) {
            return res.status(404).json({ msg: "Data in table not found" })
        }
        res.status(200).json(tableData);

    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const dataExist = await data.findById(id);
        if (!dataExist) {
            return res.status(404).json({ msg: "Data not found" })
        }
        res.status(200).json(dataExist);
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const dataExist = await data.findById(id);
        if (!dataExist) {
            return res.status(401).json({ msg: "data not found" })
        }
        const updatedData = await data.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ msg: 'Data updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const dataExist = await data.findById(id);
        if (!dataExist) {
            return res.status(404).json({ msg: "data not found" })
        }
        await data.findByIdAndDelete(id);
        res.status(200).json({ msg: "Data is deleted by table successfully" })
    } catch (error) {
        res.status(500).json({ error: error });
    }
}