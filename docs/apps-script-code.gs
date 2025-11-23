// קוד זה יורץ ב-Google Apps Script
// הוא מקבל הרשמות מהאתר ושומר אותן ב-Google Sheet

function doPost(e) {
  try {
    // פתיחת ה-Sheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // אם זה השורה הראשונה, הוסף כותרות
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['תאריך', 'שעה', 'אירוע', 'שם', 'טלפון', 'מספר משתתפים']);
      
      // עיצוב שורת הכותרות
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setBackground('#c9a961');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
      headerRange.setHorizontalAlignment('center');
    }
    
    // קבלת הנתונים מהטופס
    const data = JSON.parse(e.postData.contents);
    
    // המרת תאריך ושעה לפורמט ישראלי
    const date = new Date(data.timestamp);
    const israeliDate = Utilities.formatDate(date, "Asia/Jerusalem", "dd/MM/yyyy");
    const israeliTime = Utilities.formatDate(date, "Asia/Jerusalem", "HH:mm:ss");
    
    // הוספת שורה חדשה עם הנתונים
    sheet.appendRow([
      israeliDate,
      israeliTime,
      data.event,
      data.name,
      data.phone,
      data.participants
    ]);
    
    // עיצוב אוטומטי של העמודות
    sheet.autoResizeColumns(1, 6);
    
    // החזרת תשובה מוצלחת
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Registration saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // במקרה של שגיאה
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// פונקציה לבדיקה (אופציונלית)
function testSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log('Sheet name: ' + sheet.getName());
  Logger.log('Last row: ' + sheet.getLastRow());
}
