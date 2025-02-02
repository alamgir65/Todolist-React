import React from 'react';
import User from './User';

const UserList = () => {
    let users = [
        { UserName: 'Alamgir', designation: 'Software Engineer.', color: 'red' },
        { UserName: 'Aminul', designation: 'Lecturer', color: 'blue' },
        { UserName: 'Bakkar', designation: 'Lecturer', color: 'orange' },
        { UserName: 'Chowdhury', designation: 'Manager', color: 'green' },
        { UserName: 'Dalia', designation: 'HR', color: 'purple' },
        { UserName: 'Ehsan', designation: 'Designer', color: 'yellow' },
        { UserName: 'Farhana', designation: 'Developer', color: 'pink' },
        { UserName: 'Gulshan', designation: 'Analyst', color: 'brown' },
        { UserName: 'Hasan', designation: 'Consultant', color: 'cyan' },
        { UserName: 'Ishrat', designation: 'Support', color: 'magenta' }
    ];
    
    return (
        <div>
            {users.map((user,index)=>                            
                <User key={index} UserName={user.UserName} designation={user.designation} color={user.color}/>
            )}
        </div>
    );
};

export default UserList;