import { PhoneNumberUtil } from 'google-libphonenumber';import { addMethod, string } from 'yup';var b=PhoneNumberUtil.getInstance();addMethod(string,"phone",function(a){return this.test("phone",a?"${path} must be a valid phone number for region "+a:"${path} must be a valid phone number.",function(c){return a?b.isValidNumberForRegion(c,a):b.isValidNumber(c)})});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieXVwLXBob25lLmVzbS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCc7XG5pbXBvcnQgKiBhcyBnUGhvbmVOdW1iZXIgZnJvbSAnZ29vZ2xlLWxpYnBob25lbnVtYmVyJztcblxuY29uc3QgcGhvbmVVdGlsID0gZ1Bob25lTnVtYmVyLlBob25lTnVtYmVyVXRpbC5nZXRJbnN0YW5jZSgpO1xuXG5kZWNsYXJlIG1vZHVsZSAneXVwJyB7XG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RyaW5nU2NoZW1hIHtcbiAgICBwaG9uZShjb3VudHJ5Q29kZT86IHN0cmluZyk6IFN0cmluZ1NjaGVtYTtcbiAgfVxufVxuXG5jb25zdCBNRVRIT0RfTkFNRSA9ICdwaG9uZSc7XG5cbll1cC5hZGRNZXRob2QoWXVwLnN0cmluZywgTUVUSE9EX05BTUUsIGZ1bmN0aW9uIHl1cFBob25lKGNvdW50cnlDb2RlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGVyck1zZyA9IGNvdW50cnlDb2RlXG4gICAgPyBgXFwke3BhdGh9IG11c3QgYmUgYSB2YWxpZCBwaG9uZSBudW1iZXIgZm9yIHJlZ2lvbiAke2NvdW50cnlDb2RlfWBcbiAgICA6ICcke3BhdGh9IG11c3QgYmUgYSB2YWxpZCBwaG9uZSBudW1iZXIuJztcbiAgcmV0dXJuIHRoaXMudGVzdChNRVRIT0RfTkFNRSwgZXJyTXNnLCAodmFsdWU6IGdQaG9uZU51bWJlci5QaG9uZU51bWJlcikgPT5cbiAgICBjb3VudHJ5Q29kZVxuICAgICAgPyBwaG9uZVV0aWwuaXNWYWxpZE51bWJlckZvclJlZ2lvbih2YWx1ZSwgY291bnRyeUNvZGUpXG4gICAgICA6IHBob25lVXRpbC5pc1ZhbGlkTnVtYmVyKHZhbHVlKSxcbiAgKTtcbn0pO1xuIl0sIm5hbWVzIjpbInBob25lVXRpbCIsImdQaG9uZU51bWJlci5QaG9uZU51bWJlclV0aWwiLCJZdXAuYWRkTWV0aG9kIiwiWXVwLnN0cmluZyIsIk1FVEhPRF9OQU1FIiwieXVwUGhvbmUiLCJjb3VudHJ5Q29kZSIsInRlc3QiLCJlcnJNc2ciLCJ2YWx1ZSIsImlzVmFsaWROdW1iZXJGb3JSZWdpb24iLCJpc1ZhbGlkTnVtYmVyIl0sIm1hcHBpbmdzIjoiYUFHQSxJQUFNQSxFQUFZQyxlQUFBQSxZQUFBQSxFQVVsQkMsVUFBQUEsQ0FBY0MsTUFBZEQsQ0FGb0JFLE9BRXBCRixDQUF1Q0csUUFBQSxDQUFrQkMsQ0FBbEIsQ0FBc0MsT0FJcEUsS0FBQUMsS0FBQSxDQU5XSCxPQU1YLENBSFFFLENBQUFFLG1EQUFBQSxDQUN5Q0YsQ0FEekNFLENBRVgsdUNBQ0csQ0FBK0IsU0FBQ0MsU0FDckNILEVBQUEsQ0FDSU4sQ0FBQVUsdUJBQUEsQ0FBaUNELENBQWpDLENBQXdDSCxDQUF4QyxDQURKLENBRUlOLENBQUFXLGNBQUEsQ0FBd0JGLENBQXhCLEVBSEMsQ0FKb0UsQ0FBN0VQOyJ9