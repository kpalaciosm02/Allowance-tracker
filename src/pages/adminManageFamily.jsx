import React, { useState } from "react";
import FamilyCard from "../components/familyCard";
import AdminSidebar from "../components/adminSidebar";
import "./adminManageFamily.css"; // Add your custom styles here

const AdminManageFamily = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const familyMembers = [{
        memberName: "John Cena",
        memberRole: "Parent",
        imageUrl: "assets/placeholder.png",
    },
    {
        memberName: "Maria Smith",
        memberRole: "Child",
        imageUrl: "assets/placeholder.png",
    },
    {
        memberName: "Michael Brown",
        memberRole: "Child",
        imageUrl: "assets/placeholder.png",
    }];

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div style={{ display: "flex" }}>
            <AdminSidebar />
            <div>
                <div className="manage-family-header">
                    <button className="main-button" onClick={toggleModal}>Add member</button>
                </div>
                <div className="manage-family-content">
                    {familyMembers.map((member) => (
                        <FamilyCard familyMemberData={member}/>
                    ))}
                </div>
                {isModalOpen && (
                    <div className="modal">
                        <div className="overlay" onClick={toggleModal}></div>
                        <div className="modal-content">
                            <h2>Add Family Member</h2>
                            <form>
                                <label>
                                    Name:
                                    <input type="text" placeholder="Enter name" />
                                </label>
                                <label>
                                    Role:
                                    <select>
                                        <option value="Parent">Parent</option>
                                        <option value="Child">Child</option>
                                    </select>
                                </label>
                                <label>
                                    Image URL:
                                    <input type="text" placeholder="Enter image URL" />
                                </label>
                                <button type="submit" className="main-button">Add Member</button>
                            </form>
                            <button className="close-modal" onClick={toggleModal}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminManageFamily;
