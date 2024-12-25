'use client';

import { useState } from 'react';
import './CaesarCipher.css';  // Tạo một file CSS để áp dụng kiểu dáng

function CaesarCipher() {
    const [inputText, setInputText] = useState('');
    const [shift, setShift] = useState(3);  // Dịch chuyển mặc định là 3
    const [encryptedText, setEncryptedText] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

    const encrypt = (text, shift) => {
        return text
            .split('')
            .map(char => {
                if (char >= 'A' && char <= 'Z') {
                    return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
                } else if (char >= 'a' && char <= 'z') {
                    return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
                }
                return char;
            })
            .join('');
    };

    const decrypt = (text, shift) => {
        return text
            .split('')
            .map(char => {
                if (char >= 'A' && char <= 'Z') {
                    return String.fromCharCode(((char.charCodeAt(0) - 65 - shift + 26) % 26) + 65);
                } else if (char >= 'a' && char <= 'z') {
                    return String.fromCharCode(((char.charCodeAt(0) - 97 - shift + 26) % 26) + 97);
                }
                return char;
            })
            .join('');
    };

    const handleEncryption = () => {
        const encrypted = encrypt(inputText, shift);
        setEncryptedText(encrypted);
    };

    const handleDecryption = () => {
        const decrypted = decrypt(encryptedText, shift);
        setDecryptedText(decrypted);
    };

    return (
        <div className="cipher-container">
            <h1>Caesar Cipher</h1>
            <div className="input-section">
                <label>Nhập văn bản:</label>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Nhập văn bản để mã hóa"
                />
            </div>
            <div className="shift-section">
                <label>Shift (số dịch):</label>
                <input
                    type="number"
                    value={shift}
                    onChange={(e) => setShift(Number(e.target.value))}
                    min="1"
                />
            </div>
            <div className="buttons">
                <button onClick={handleEncryption}>Mã hóa</button>
                <button onClick={handleDecryption}>Giải mã</button>
            </div>
            <div className="output-section">
                <p><strong>Văn bản đã mã hóa: </strong>{encryptedText}</p>
                <p><strong>Văn bản giải mã: </strong>{decryptedText}</p>
            </div>
                        {/* Thêm footer */}
                        <footer className="footer">
                <p>&copy; 2024 - Tất cả các quyền được bảo lưu. Thiết kế bởi TienDat.</p>
            </footer>
        </div>
    );
}

export default CaesarCipher;
